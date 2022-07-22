fetch(a1505f563d1e71d6a4210292e8eebc41).then(function(response) {
   
    if (response.ok) {
      response.json().then(function(data) {
        console.log(data);
      });
    }
    else {
      alert("There was a problem with your request!");
    }
  });