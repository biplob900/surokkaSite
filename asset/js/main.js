// side nav btn content
$(document).ready(function () {
    $("#nationlNid").click(function () {
        $("#defult-text-subpage-visibility").addClass("defult-text-subpage-visibility");
        $("#birth-btn-form-visibility").addClass("birth-btn-form-hide");
        $("#passport-btn-form-visibility").addClass("passport-btn-form-hide");
        $("#nid-btn-form-visibility").removeClass("nid-btn-form-hide");
    });
    $("#birthcertificate").click(function () {
        $("#defult-text-subpage-visibility").addClass("defult-text-subpage-visibility");
        $("#nid-btn-form-visibility").addClass("nid-btn-form-hide");
        $("#passport-btn-form-visibility").addClass("passport-btn-form-hide");
        $("#birth-btn-form-visibility").removeClass("birth-btn-form-hide");
    });
    $("#passport").click(function () {
        $("#defult-text-subpage-visibility").addClass("defult-text-subpage-visibility");
        $("#nid-btn-form-visibility").addClass("nid-btn-form-hide");
        $("#birth-btn-form-visibility").addClass("birth-btn-form-hide");
        $("#passport-btn-form-visibility").removeClass("passport-btn-form-hide");
    });

    // side nav btn active
    $("#nationlNid").click(function () {
        $("#nationlNid").addClass("side-btn-bg-show");
        $("#birthcertificate").removeClass("side-btn-bg-show");
        $("#passport").removeClass("side-btn-bg-show");
    });
    $("#birthcertificate").click(function () {
        $("#birthcertificate").addClass("side-btn-bg-show");
        $("#nationlNid").removeClass("side-btn-bg-show");
        $("#passport").removeClass("side-btn-bg-show");
    });
    $("#passport").click(function () {
        $("#passport").addClass("side-btn-bg-show");
        $("#nationlNid").removeClass("side-btn-bg-show");
        $("#birthcertificate").removeClass("side-btn-bg-show");
    });
    //navber scroll fixd code
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          $('.navbar').addClass('nav-edit-fixd');
        }
        else {
          $('.navbar').removeClass('nav-edit-fixd');
        }
      });
  
});