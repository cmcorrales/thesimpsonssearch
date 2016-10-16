$(document).ready(function () {
  $("select.characteristics").change(function() {
  $("img").removeClass("colored").addClass("gray")
  let trait = $("select.traits").val();
  let selected = $(this).val()
  if (trait == 0) {
    $("img."+selected).addClass("colored").removeClass("gray")
  }
  if ($("img").hasClass(trait) && $("img").hasClass(selected)) {
    $("img."+selected+"."+trait).addClass("colored").removeClass("gray")
  }
})
$("select.traits").change(function() {
  $("img").removeClass("colored").addClass("gray")
  let characteristics = $("select.characteristics").val();
  let selected = $(this).val()
  if (characteristics == 0) {
    $("img."+selected).addClass("colored").removeClass("gray")
  }
  if ($("img").hasClass(characteristics) && $("img").hasClass(selected)) {
    $("img."+selected+"."+characteristics).addClass("colored").removeClass("gray")
  }
})
})
