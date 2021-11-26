<template lang="">
  <ArisenHeader>
    <template #collapse-content>
      <ul
          class="nav navbar-nav navbar-dark ms-auto mb-2 mb-lg-0 gap-4"
        >
          <li class="nav-item">
            <a class="nav-link" :href="route('voters-registration')">
              Voters Registration
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="route('voters-education')">Voters Education</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link-dropdown" :href="route('candidate-profiles.index')">Candidate Profiles</a>
          </li> -->
      
      
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Candidates Profile
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <template v-for="region in locations" :key="region.id">
              <li>
                <a class="dropdown-item" href="#">{{ region.name }}</a>
              </li>
            </template>
          </ul>
        </li> -->

      <li class="nav-item dropdown" id="myDropdown">
      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Candidates Profile  </a>
      <ul class="dropdown-menu">
        <template v-for="region in locations" :key="region.id">
        <li> <a class="dropdown-item" :href="region.id"> {{region.name}}</a></li>
        <!-- <li> <a class="dropdown-item" href="#"> Dropdown item 2 &raquo; </a>
          <ul class="submenu dropdown-menu">
            <li><a class="dropdown-item" href="#">Submenu item 1</a></li>
            <li><a class="dropdown-item" href="#">Submenu item 2</a></li>
            <li><a class="dropdown-item" href="#">Submenu item 3 &raquo; </a>
              <ul class="submenu dropdown-menu">
                <li><a class="dropdown-item" href="#">Multi level 1</a></li>
                <li><a class="dropdown-item" href="#">Multi level 2</a></li>
              </ul>
            </li>
            <li><a class="dropdown-item" href="#">Submenu item 4</a></li>
            <li><a class="dropdown-item" href="#">Submenu item 5</a></li>
          </ul>
        </li>
        <li><a class="dropdown-item" href="#"> Dropdown item 3 </a></li>
        <li><a class="dropdown-item" href="#"> Dropdown item 4 </a></li> -->
        </template>
      </ul>
    </li>
      </ul>

      <!-- <div>Voters Registration</div>
      <div>Voters Education</div>
      <div>Candidate Profiles</div> -->
    </template>
  </ArisenHeader>
  <div class="" style="position: relative">
    <slot></slot>
  </div>
  <ArisenFooter></ArisenFooter>
</template>

<script>
import ArisenFooter from "../Components/Layout/ARISEnFooter.vue";
import ArisenHeader from "./Partials/Header.vue";

export default {
  props: { 
    locations: Array, 
  },
  components: {
    ArisenFooter,
    ArisenHeader,
  },
  data: () => ({}),
  methods (){
    document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });

      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }

            }
        });
      })
    }
}); 
  },
};
</script>

<style>
@media (max-width: 991px) {
  .dropdown-menu .dropdown-menu{
      margin-left:0.7rem; margin-right:0.7rem; margin-bottom: .5rem;
  }
}	

@media (max-width: 991px) {
  .dropdown-menu .dropdown-menu{
      margin-left:0.7rem; margin-right:0.7rem; margin-bottom: .5rem;
  }
}	
</style>
