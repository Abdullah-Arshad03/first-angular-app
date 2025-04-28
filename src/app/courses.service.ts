import { Injectable } from "@angular/core";

Injectable()
export class CourseService{
    constructor(){}
    getCourses(){
        return ['courses1', 'courses2', 'courses3']
    }
}