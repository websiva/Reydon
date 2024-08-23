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
      image:'team/team-member-3.jpg'
    },
    {
      id:'2',
      name:'Aditi Sharma',
      position:'Director',
      roleDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor cupiditate dolore ad ratione iusto sed officiis.',
      instagram:'',
      facebook:'',
      twitter:'',
      image:'team/team-member-2.jpg'
    },
    {
      id:'3',
      name:'Anjali Sinha',
      position:'Director',
      roleDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor cupiditate dolore ad ratione iusto sed officiis.',
      instagram:'',
      facebook:'',
      twitter:'',
      image:'team/team-member-4.jpg'
    },
    {
      id:'4',
      name:'Vikas Patel',
      position:'Manager',
      roleDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor cupiditate dolore ad ratione iusto sed officiis.',
      instagram:'',
      facebook:'',
      twitter:'',
      image:'team/team-member-1.jpg'
    },
  ]
}
