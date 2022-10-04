// Display Daily Time in the screen
let dailyDate = moment().format(`dddd, MMMM Do, YYYY`);
$(`#currentDay`).html(dailyDate);


$(document).ready( function () {
  // save LocalStorage
  $(`.saveBtn`).on(`click`, function () {
    let updateTxt = $(this).siblings(`.description`).val();

    let updateTime = $(this).parent().attr(`id`);


    localStorage.setItem(updateTime, updateTxt);
  });

  // Actual time function
  function actualTime() {

    let timeData = moment().hour();


    $(`.time-block`).each(function () {
      var timeBlock = parseInt($(this).attr(`id`).split(`hour`)[1]);


      if (timeBlock < timeData) {
        $(this).addClass(`past`);
        $(this).removeClass(`present`);
        $(this).removeClass(`future`);
      } else if (timeBlock === timeData) {
        $(this).removeClass(`past`);
        $(this).addClass(`present`);
        $(this).removeClass(`future`);
      } else {
        $(this).removeClass(`past`);
        $(this).removeClass(`present`);
        $(this).addClass(`future`);
      }
    });
  }

  // Collect data from LocalStorage
  $(`#hour6 .description`).val(localStorage.getItem(`hour6`));
  $(`#hour7 .description`).val(localStorage.getItem(`hour7`));
  $(`#hour8 .description`).val(localStorage.getItem(`hour8`));
  $(`#hour9 .description`).val(localStorage.getItem(`hour9`));
  $(`#hour10 .description`).val(localStorage.getItem(`hour10`));
  $(`#hour11 .description`).val(localStorage.getItem(`hour11`));
  $(`#hour12 .description`).val(localStorage.getItem(`hour12`));
  $(`#hour13 .description`).val(localStorage.getItem(`hour13`));
  $(`#hour14 .description`).val(localStorage.getItem(`hour14`));
  $(`#hour15 .description`).val(localStorage.getItem(`hour15`));
  $(`#hour16 .description`).val(localStorage.getItem(`hour16`));
  $(`#hour17 .description`).val(localStorage.getItem(`hour17`));
  $(`#hour18 .description`).val(localStorage.getItem(`hour18`));
  $(`#hour19 .description`).val(localStorage.getItem(`hour19`));
  $(`#hour20 .description`).val(localStorage.getItem(`hour20`));
  $(`#hour21 .description`).val(localStorage.getItem(`hour21`));
  $(`#hour22 .description`).val(localStorage.getItem(`hour22`));

  actualTime();
});