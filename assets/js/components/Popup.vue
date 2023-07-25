<template>
  <div class="wrapper">
    <h1 class="title">Server Worker</h1>
    <div class="buttons">
      <button type="button" class="state-off">Off</button>
      <button type="button" class="state-off">On</button>
    </div>
    <div class="server">
      <p>Check for Server Worker for this website:</p>
      <button type="button" class="check_server" @click="checkServerWorker">Check Server Worker</button>
    </div>
    <button type="button" class="open-video" @click="openVideoPopup" >Tutorial</button>
    <div class="video-popup" v-if="isVideoPopupOpen">
      <!-- Replace the placeholder with your desired tutorial video iframe -->
      <iframe width="560" height="315" src="https://www.youtube.com/embed/A6MHtKkA0CA" frameborder="0" allowfullscreen></iframe>
      <button class="close-video" @click="closeVideoPopup">Close</button>
    </div>
    <div class="modal" v-if="isOpen">
      <div class="modal-content">
        <h2>Modal Window</h2>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      serverWorkerText: '',
      isVideoPopupOpen: false
    };
  },
  created() {
    chrome.browserAction.onClicked.addListener(function () {
      chrome.tabs.executeScript(null, {
        code: "  try { if ('serviceWorker' in navigator) {navigator.serviceWorker.getRegistrations().then(function(registrations)    { if (registrations.length > 0)   { var serviceWorker_found = registrations[0].active;  if (serviceWorker_found)   {  var serviceWorkerURL = serviceWorker_found.scriptURL; console.log('Service Worker URL: ',serviceWorkerURL)   }  console.log(serviceWorkerURL);  }  else    {console.log('No service worker found.');  }  });  }  else  { console.log('Service workers are not supported in this browser.');  } }   catch (error)   { console.log('An error occurred:', error); }"
      });
    });
  },
  methods: {
    checkServerWorker() {
      console.log("1");
      chrome.tabs.executeScript(null, {
        code: `try 
                  { 
                    if ('serviceWorker' in navigator) 
                    {
                      navigator.serviceWorker.getRegistrations().then(function(registrations)    
                        { 
                          if (registrations.length > 0)   
                          { 
                            var serviceWorker_found = registrations[0].active;  
                            if (serviceWorker_found)   
                            {  
                              var serviceWorkerURL = serviceWorker_found.scriptURL; 
                              console.log('Service Worker URL: ',serviceWorkerURL);
                              alert('Server Worker is found');   
                            }  
                            console.log(serviceWorkerURL);
                            alert(serviceWorkerURL);  
                          }  
                          else    
                          {
                            console.log('No service worker found.');
                            alert("No service worker found.")  
                          }  
                        });  
                      }  
                      else  
                      { 
                        console.log('Service workers are not supported in this browser.');  
                      } 
                    }   
                    catch (error)   
                    { 
                      console.log('An error occurred:', error); 
                    }`
      });
    },

    openModal() {
      this.isOpen = true;
    },

    closeModal() {
      this.isOpen = false;
    },
    openVideoPopup() {
      this.isVideoPopupOpen = true;
    },
    closeVideoPopup() {
      this.isVideoPopupOpen = false;
    }
  }
};
</script>