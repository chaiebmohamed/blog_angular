import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogServiceService } from 'src/app/blog-service.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addBlogForm!: FormGroup;
  constructor(private service : BlogServiceService , private router :Router) { }

  ngOnInit(): void {
    this.addBlogForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      content: new FormControl('')
  });
  }

  onSubmit() {
    this.service.addBlog(this.addBlogForm.value).then((res:any)=>{
      swal.fire('done','blog added successfully','success');
      setTimeout(() => {
        this.router.navigate([""]);
      }, 500);
      
    }).catch((err)=>{
      swal.fire('error',err.error,'error')
    })

    
    console.log(this.addBlogForm.value);
    // send data to the server
}

}
