import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from 'src/app/blog-service.service';
import { blog } from 'src/app/model/blog';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss']
})
export class ReadmoreComponent implements OnInit {
  id:any;
  myblog! :blog;
  constructor(private service : BlogServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.getBlogById();
  }
  getBlogById(){
    this.service.getBlogById(this.id)
    .then((res:any)=>{
      console.log("blog",res);
      this.myblog = res.data;
    });
  }

}
