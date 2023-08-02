export type Event={
  id:number
  description:string
  date:number
}

export type Period={
  id:number
  startDate:number
  endDate:number
  title:string
  events:Event[]
}

export const data:Period[]=[
  {id:1,
    startDate:1987,
    endDate:1991,
    title:'Литература',
    events:[
      {id:1,date:1987,description:'sasas asasa'},
      {id:2,date:1988,description:'wwwww wwwwww'},
      {id:3,date:1989,description:'aaa aaaaa aaaa aaaaaa'}
    ]
  },
  {id:2,
    startDate:1992,
    endDate:1997,
    title:'Наука',
    events:[
      {id:1,date:1992,description:'ккккк кккккккккк ккккк ккккк'},
      {id:2,date:1993,description:'ww wwwwww www'},
      {id:3,date:1994,description:'aaaaaa aaaaaaaaaaaa'}
    ]
  },{id:3,
    startDate:1998,
    endDate:2002,
    title:'Музыка',
    events:[
      {id:1,date:1998,description:'sasas asasa'},
      {id:2,date:1999,description:'wwwww wwwwww'},
      {id:3,date:2000,description:'aaaaaaaaaa aaaa aaaa'}
    ]
  },
  {id:4,
    startDate:1998,
    endDate:2002,
    title:'Музыка',
    events:[
      {id:1,date:1998,description:'sasas asasa'},
      {id:2,date:1999,description:'wwwww wwwwww'},
      {id:3,date:2000,description:'aaaaaaaaaa aaaa aaaa'}
    ]
  },
  {id:5,
    startDate:1998,
    endDate:2002,
    title:'Музыка',
    events:[
      {id:1,date:1998,description:'sasas asasa'},
      {id:2,date:1999,description:'wwwww wwwwww'},
      {id:3,date:2000,description:'aaaaaaaaaa aaaa aaaa'}
    ]
  },
]