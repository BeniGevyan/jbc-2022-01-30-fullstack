(() => {
  ////First way
  // let blueFlag = true;
  // function fadeBlue() {
  //   if (blueFlag === true) {
  //     $('.blue').fadeOut(2000);
  //     $('#blueBtn').text('Fade In Blue Squares');
  //     blueFlag = false;
  //   } else {
  //     $('.blue').fadeIn(2000);
  //     $('#blueBtn').text('Fade Out Blue Squares');
  //     blueFlag = true;
  //   }
  // }

  // let redFlag = true;
  // function fadeRed() {
  //   if (redFlag === true) {
  //     $('.red').fadeOut(2000);
  //     $('#redBtn').text('Fade In Red Squares');
  //     redFlag = false;
  //   } else {
  //     $('.red').fadeIn(2000);
  //     $('#redBtn').text('Fade Out Red Squares');
  //     redFlag = true;
  //   }
  // }

  //Second way
  // let blueFlag = true;
  // function fadeBlue() {
  //   if (blueFlag) {
  //     $('.blue').fadeOut(2000);
  //     $('#blueBtn').text('Fade In Blue Squares');
  //   } else {
  //     $('.blue').fadeIn(2000);
  //     $('#blueBtn').text('Fade Out Blue Squares');
  //   }
  //   blueFlag = !blueFlag; // toggle
  // }

  // let redFlag = true;
  // function fadeRed() {
  //   if (redFlag) {
  //     $('.red').fadeOut(2000);
  //     $('#redBtn').text('Fade In Red Squares');
  //   } else {
  //     $('.red').fadeIn(2000);
  //     $('#redBtn').text('Fade Out Red Squares');
  //   }
  //   redFlag = !redFlag; // toggle
  // }

  // third way
  // let flag = {
  //   red: true,
  //   blue: true,
  // };
  // function fade(color) {
  //   if (flag[color]) {
  //     $(`.${color}`).fadeOut(2000);
  //     $(`#${color}Btn`).text(`Fade In ${color} Squares`);
  //   } else {
  //     $(`.${color}`).fadeIn(2000);
  //     $(`#${color}Btn`).text(`Fade Out ${color} Squares`);
  //   }
  //   flag[color] = !flag[color]; // toggle
  // }

  // const blueBtn = document.querySelector('#blueBtn');
  // const redBtn = document.querySelector('#redBtn');

  // function fadeRed() {
  //   fade('red');
  // }

  // function fadeBlue() {
  //   fade('blue');
  // }

  function fade(color) {
    $(`.${color}`).fadeToggle(2000);
    const inOrOut = $(`#${color}Btn`).text().indexOf('Out') !== -1 ? 'In' : 'Out';
    $(`#${color}Btn`).text(`Fade ${inOrOut} ${color} Squares`);
  }

  const blueBtn = document.querySelector('#blueBtn');
  const redBtn = document.querySelector('#redBtn');

  function fadeRed() {
    fade('red');
  }

  function fadeBlue() {
    fade('blue');
  }

  blueBtn.onclick = fadeBlue;
  redBtn.onclick = fadeRed;
})();
