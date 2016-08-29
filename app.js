$(document).ready(function () {
  $("select.characteristics").change(function() {
  $("img").removeClass("colored").addClass("gray")
  var trait = $("select.traits").val();
  var selected = $(this).val()
  if (trait == 0) {
    $("img."+selected).addClass("colored").removeClass("gray")
  }
  if ($("img").hasClass(trait) && $("img").hasClass(selected)) {
    $("img."+selected+"."+trait).addClass("colored").removeClass("gray")
  }
})
$("select.traits").change(function() {
  $("img").removeClass("colored").addClass("gray")
  var characteristics = $("select.characteristics").val();
  var selected = $(this).val()
  if (characteristics == 0) {
    $("img."+selected).addClass("colored").removeClass("gray")
  }
  if ($("img").hasClass(characteristics) && $("img").hasClass(selected)) {
    $("img."+selected+"."+characteristics).addClass("colored").removeClass("gray")
  }
})
})
