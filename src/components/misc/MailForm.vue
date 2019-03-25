<template lang="pug">
  //- div#mailform
  //-   form.mail__form
  //-     input#client_name(
  //-       type="text"
  //-       placeholder="name"
  //-     )
  //-     input#client_email(
  //-       type="email"
  //-       placeholder="email"
  //-     )
  //-     input#client_message(
  //-       type="text"
  //-       placeholder="text"
  //-     )
  //-     button#submit(
  //-       @click="mailSubmit"
  //-     ) Submit
</template>

<script>
// export default {
//   name: 'mailform',

//   data () {
//     return {

//     }
//   },

//   methods: {
//     mailSubmit() {
//       document.getElementById('submit').addEventListener('click', event => {
//       const leadName = document.getElementById('client_name').value;
//       const leadEmail = document.getElementById('client_email').value;
//       const leadMessage = document.getElementById('client_message').value;

//       if(leadEmail != "" && leadName != "") {

//         const leadTimestamp = Math.floor(Date.now() / 1000);

//         firebase.database().ref('leads').once('value', snapshot => {
//           var totalLeads = snapshot.numChildren();
//           totalLeads++;

//           firebase.database().ref('leads').child(totalLeads).set({
//             name: leadName,
//             email: leadEmail,
//             message: leadMessage,
//             timestamp: leadTimestamp
//           });
//           $('.contact-form').hide();
//           $('.message-sent-success').show();

//         }, function(error) {
//           console.log(error);
//         });
//         } else {
//           alert('Please fill all the fields.');
//         }
//       });
//     }
//   },
// }
</script>

<style lang="scss">
// #mailform {
//   .container {
//     .page__wrapper {
//       input {
//         width: 100%;
//       }
//     }
//   }
// }
</style>
