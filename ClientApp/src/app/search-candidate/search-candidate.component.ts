import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core'
import { environment } from '../../environments/environment.prod';
import { CandidateModel } from '../_models/candidate';
import candidates from '../asset/candidatedata.json';
import technologies from '../asset/technology.json';

@Component({
    selector: 'app-search-candidate',
    templateUrl: './search-candidate.component.html',
})

export class SearchCandidateComponent {
    public techName: string;
    public exp: string;
    lastkeydown1: number = 0;
    CandidateList: any = [];
    TechnologiesList: any = [];
    TechnologiesList1: any = [];
    CandidateList1: any = [];
    CandidateList2: any = [];
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.CandidateList = candidates;
        this.TechnologiesList = technologies;
    }


    BindCandidate($event) {
        this.CandidateList1 = [];
        this.CandidateList2 = [];
        let techid = this.TechnologiesList.find(item => item.name === this.techName).guid;
        this.getCandidatefromTech(techid);
    }

    getCandidatefromTech(techid: any) {
        for (let i = 0; i < this.CandidateList.length; i++) {
            for (let j = 0; j < this.CandidateList[i].experience.length; j++) {
                if (this.CandidateList[i].experience[j].technologyId === techid) {
                    this.CandidateList1.push(this.CandidateList[i]);
                }
            }
        }
        if (this.exp != undefined) {
            if (this.exp.length > 0) {
                for (let i = 0; i < this.CandidateList1.length; i++) {
                    for (let j = 0; j < this.CandidateList1[i].experience.length; j++) {
                        if (this.CandidateList1[i].experience[j].technologyId == techid && this.CandidateList1[i].experience[j].yearsOfExperience == this.exp) {
                            this.CandidateList2.push(this.CandidateList1[i]);
                        }
                    }
                }
            }
            else {
                this.CandidateList2 = this.CandidateList1;
            }
        }
        else {
            this.CandidateList2 = this.CandidateList1;
        }
    }

    searchFromEmp(arr, regex) {
        let matches = [], i;
        for (i = 0; i > arr.length; i++) {
            if (String(arr[i].experience.technologyId).match(regex)) {
                matches.push(arr[i]);
            }
        }
    }

    delete(candidateId) {
        delete this.CandidateList.candidateId;
    }
}


