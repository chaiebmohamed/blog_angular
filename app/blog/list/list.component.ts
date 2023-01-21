import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/blog-service.service';
import { blog } from 'src/app/model/blog';
import { data } from 'src/app/model/testdatasource';
import swal from 'sweetalert2';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  blogs: Array<blog> = [];
  constructor(private service :BlogServiceService) { }

  ngOnInit(): void {
    this.loadBlogs();
   // this.blogs= data;
  }
  loadBlogs(){
    this.service.getBlogs().then(( (res:any)=>{
      this.blogs = res.data;
    }))
  }
  upvote(id: any) {
    this.service.upvote(id).then((res:any)=>{
      this.loadBlogs();
    })
  }
  
  downvote(id: any) {
    this.service.downvote(id).then((res:any)=>{
      this.loadBlogs();
    })
  }
  delete(id:any){
    swal.fire({
      // type:'warning',
       title: 'Are you sure you are going to delete this blog ? ',
       text: 'it will delete from the database ! ',
       showCancelButton: true,
       confirmButtonColor: '#049F0C',
       cancelButtonColor:'#ff0000',
       confirmButtonText: 'Yes, delete it!',
       cancelButtonText: 'No, keep it',
     }).then((res) => {
       if (res.value) {
         this.service.deleteBlog(id).then(
           data => {
             console.log(data);
             swal.fire(
               'Deleted !',
               'This blog is deleted from database',
               'success'
             );
               this.loadBlogs();
           });
       }else{
         swal.fire(
           'Canceled !',
           'Operation canceled .',
           'success'
         )
       }
     });
  }

}
