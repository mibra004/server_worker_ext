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
      serverWorkerText: ''
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
    }
  }
};
</script>