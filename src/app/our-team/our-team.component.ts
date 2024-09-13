import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {
  members=[
    {
      id:'1',
      name:'Venkatesh',
      position:'CEO',
      roleDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor cupiditate dolore ad ratione iusto sed officiis.',
      instagram:'',
      facebook:'',
      twitter:'',
      image:'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207997/team-member-3_mpisan.jpg'
    },
    {
      id:'2',
      name:'Aditi Sharma',
      position:'Director',
      roleDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor cupiditate dolore ad ratione iusto sed officiis.',
      instagram:'',
      facebook:'',
      twitter:'',
      image:'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207997/team-member-2_ervmhm.jpg'
    },
    {
      id:'3',
      name:'Anjali Sinha',
      position:'Director',
      roleDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor cupiditate dolore ad ratione iusto sed officiis.',
      instagram:'',
      facebook:'',
      twitter:'',
      image:'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207999/team-member-4_my7o9a.jpg'
    },
    {
      id:'4',
      name:'Vikas Patel',
      position:'Manager',
      roleDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor cupiditate dolore ad ratione iusto sed officiis.',
      instagram:'',
      facebook:'',
      twitter:'',
      image:'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207996/team-member-1_y9ziyg.jpg'
    },
  ]
}
