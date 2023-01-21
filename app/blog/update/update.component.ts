import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogServiceService } from 'src/app/blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { blog } from 'src/app/model/blog';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateBlogForm!: FormGroup;
  id:any;
  myblog!:blog;
  constructor(private service : BlogServiceService,private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.updateBlogForm = new FormGroup({
      content: new FormControl('')
  });
  this.getblogbyid();
  }
  getblogbyid(){
    this.service.getBlogById(this.id).then((res:any)=>{
      this.myblog = res.data;
    })
  }
  onSubmit() {
    this.service.updateBlog(this.id,this.updateBlogForm!.value).then((res:any)=>{
      console.log("content ",this.updateBlogForm!.value);
      console.log("result of the update ===>",res)
      swal.fire('done','blog Updated successfully','success');
      setTimeout(() => {
       this.router.navigate([""]);
      }, 500);
    })
    console.log(this.updateBlogForm.value);
    
}
}
