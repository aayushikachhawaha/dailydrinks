export class Init {
    load() {
      if(localStorage.getItem('employees') === null || localStorage.getItem('employees') == undefined) {
        console.log('No orders Found... Creating...');
        let emps = [
          {
            id:1,
            firstName:'Mojito',
            lastName:'40',
            languages: ['Iced']
          }
        ];
  
        localStorage.setItem('employees', JSON.stringify(emps));
        return 
      } else {
        console.log('Found employees...');
      }
    }
  }