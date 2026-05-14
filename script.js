<script>

function sendWhatsApp(pet){

let name =
document.getElementById("name").value.trim();

let phone =
document.getElementById("phone").value.trim();

let msg =
document.getElementById("message").value.trim();

/* VALIDATION */

if(name === "" || phone === "" || msg === ""){

alert("Please fill all details 🐾");

return;

}

/* WHATSAPP REPORT */

let text =

"🐾 *NEW PAWHAVEN ADOPTION REQUEST* 🐾\n\n" +

"━━━━━━━━━━━━━━━\n\n" +

"👤 *Name:* " + name + "\n\n" +

"📞 *Phone:* " + phone + "\n\n" +

"🐶 *Pet Interested In:* " + pet + "\n\n" +

"💬 *Reason For Adoption:*\n" +
msg + "\n\n" +

"━━━━━━━━━━━━━━━\n" +

"🏡 PawHaven Pet Adoption";

/* YOUR WHATSAPP NUMBER */

let adminNumber = "917262028686";

/* CREATE WHATSAPP URL */

let url =
"https://wa.me/" + adminNumber +
"?text=" + encodeURIComponent(text);

/* OPEN WHATSAPP */

window.open(url, "_blank");

/* SUCCESS MESSAGE */

setTimeout(function(){

alert(

"✅ REQUEST SUBMITTED SUCCESSFULLY ❤️\n\n" +

"Hello " + name + ",\n\n" +

"Thank you for contacting PawHaven 🐾\n\n" +

"Your adoption request for " + pet +
" has been received successfully.\n\n" +

"Our team will contact you soon on:\n" +
phone + "\n\n" +

"🏡 Thank you for supporting pet adoption!"

);

},1000);

}

</script>