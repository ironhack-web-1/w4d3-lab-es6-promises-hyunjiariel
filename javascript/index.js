// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */

// Iteration 1 - using callbacks

/*getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`

});*/

getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li> Mashed potatoes are ready! </li>`;
        });
      });
    });
  });

  /*getInstruction("mashedPotatoes", 5, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li> ${Mashed potatoes are ready!} </li>`;
  });*/
});

/* setInterval(() => {
    this.step += 1;
    console.log(this.step);
  }, 5); */

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction(`steak`, 1);
  })
  .then((step1) => {
    //bc of return new promises in obtaininstruction.js
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction(`steak`, 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction(`steak`, 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction(`steak`, 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction(`steak`, 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction(`steak`, 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction(`steak`, 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction(`steak`, 8);
  })
  .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    return obtainInstruction(`steak`, 9);
  })

  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li> Steak is ready! </li>`;
    return obtainInstruction(`steak`, 10);
  }); //cannot use 'then' bc there are no more lines in obtaininstruction that could be brought in here
// ... Your code here

// Iteration 3 using async/await
/*function obtainInstruction(step) {
  return new Promise((resolve, reject) => {
    console.log(instructions[step]);

    if (!instructions[step]) reject("Instructions not found.");
    else resolve();
  });
}*/

async function makeBroccoli() {
  try {
    for (let i = 0; i < 7; ++i) { //in order to not repeat each step put it in a for loop
      const step = await obtainInstruction("broccoli", i); //to add value of await inside 
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    
    }
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

  } catch (error) {
    console.log("Something went wrong: ", error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
