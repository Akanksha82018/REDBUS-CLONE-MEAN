import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile-page',
  standalone: false,
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit{
  selecteditem:string='trips';
  currentcustomer:any=[]
  currentname:string=''
  currentemail:string=''
  mytrip:any[]=[]
  handlelistitemclick(selected:string):void{
    this.selecteditem=selected
  }
  ngOnInit(): void {
    this.currentcustomer=sessionStorage.getItem('Loggedinuser')
    const user=JSON.parse(this.currentcustomer)
    this.currentname=user.name;
    this.currentemail=user.email;
    
  }
}