import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "./courses.service";

@Component({
    selector : 'courses', 
    templateUrl :'./courses.component.html',
    imports : [CommonModule]
})
export class CoursesComponent{
    title = 'list of courses';
    imageUrl = 'https://images.unsplash.com/photo-1745794621090-d856c53b0cc2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    getTitle(){
    return  this.title
    }
    courses;
    constructor(public service : CourseService){
        this.courses = service.getCourses()
    };

}