// Create snowflakes dynamically
const snowflakes = document.querySelector('.snowflakes');

for (let i = 0; i < 100; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;
  snowflake.style.animationDelay = `${Math.random() * 2}s`;
  snowflakes.appendChild(snowflake);
}
$(function() {
    $(".draggable").draggable({
      containment: "body",
      scroll: false,
      start: function(event, ui) {
        $(this).css("z-index", 1000);
      },
      stop: function(event, ui) {
        $(this).css("z-index", 1);
      }
    });
  
    // Show Santa Popup when clicking on the gift box
    $("#giftBox").click(function() {
      $("#santaPopup").fadeIn();
    });
  
    // Hide Santa Popup when clicking outside the popup
    $(document).mouseup(function(e) {
      var container = $("#santaPopup");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.fadeOut();
      }
    });
  });
  
  