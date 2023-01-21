import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { blog } from './model/blog';
@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  url = environment.url+'blog';
  constructor(private http : HttpClient) { }

  addBlog(data:blog) {
    return new Promise(resolve => {
      this.http.post(this.url + '/', data).subscribe((res: any) => {
        resolve({ status: true, data: res });
      }, (err:any) => {
        resolve({ status: false, error: err });
      });
    });
  }

  getBlogById(id:string) {
    return new Promise(resolve => {
      this.http.get(this.url+ '/' + id).subscribe((res: any) => {
        resolve({ status: true, data: res });
      }, (err:any) => {
        resolve({ status: false, error: err });
      });
    });
  }
  

  getBlogs() {
    return new Promise(resolve => {
      this.http.get(this.url).subscribe((res: any) => {
        resolve({ status: true, data: res });
      }, (err:any) => {
        resolve({ status: false, error: err });
      });
    });
  }

  updateBlog(id:any,data:any) {
    return new Promise(resolve => {
      this.http.patch(this.url + '/update/'+id, data).subscribe((res: any) => {
        resolve({ status: true, data: res });
      }, (err:any) => {
        resolve({ status: false, error: err });
      });
    });
  }
  upvote(id:any) {
    return new Promise(resolve => {
      this.http.patch(this.url + '/inc/'+id, null).subscribe((res: any) => {
        resolve({ status: true, data: res });
      }, (err:any) => {
        resolve({ status: false, error: err });
      });
    });
  }
  downvote(id:any) {
    return new Promise(resolve => {
      this.http.patch(this.url + '/dec/'+id,null).subscribe((res: any) => {
        resolve({ status: true, data: res });
      }, (err:any) => {
        resolve({ status: false, error: err });
      });
    });
  }

  deleteBlog(id:number) {
    return new Promise(resolve => {
      this.http.delete(this.url +"/"+id).subscribe((res: any) => {
        resolve({ status: true, data: res });
      }, (err:any) => {
        resolve({ status: false, error: err });
      });
    });
  }
}
