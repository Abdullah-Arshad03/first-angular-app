import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { CourseService } from "./courses.service";
import { FormsModule, NgModel } from "@angular/forms";

@Component({
    selector: 'courses', 
    templateUrl: './courses.component.html',
    imports: [CommonModule, FormsModule],
})
export class CoursesComponent {

     
    isActive = true
    xyz = 'yellow'

    email = 'imabdullahhhh@gmail.com'

    enteredd(){
        console.log('this is email now :', this.email)
    }
    divClicked(){
        console.log('div is clicked!')
    }
    entered($event:Event){
        const target = $event.target as HTMLInputElement
        this.email = target.value
        console.log('entered bro', this.email)
    }
    onClick($event:Event){
        $event.stopPropagation()
        console.log("im clicked!", $event)
    }
    entering(kisib : string){
        console.log('just made : ', kisib)
    }
    // onpressingEnter($event : Event) {
    //     const target = $event.target as HTMLInputElement; // Type assertion
    //     console.log('i pressed',target.value); // Access the value correctly
    // }


    // title = 'list of courses';
    // imageUrl = 'https://images.unsplash.com/photo-1745794621090-d856c53b0cc2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    // getTitle(){
    // return  this.title
    // }
    // courses;
    // constructor(public service : CourseService){
    //     this.courses = service.getCourses()
    // };
}
