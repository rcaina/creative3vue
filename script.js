Vue.component('star-rating', VueStarRating.default);
let app = new Vue({
  el: '#app',
  
  data: {
    number: '',
    max: '',
    current: {
      title: '',
      alt: '',
    },
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
  },
  created() {
    this.xkcd();
  },
  
  computed: {
    month() {
      var month = new Array;
      if (this.current.month === undefined)
        return '';
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      return month[this.current.month - 1];
    },
  },

  methods: {
      
      addComment() {
          
      if (!(this.number in this.comments))
        Vue.set(app.comments, this.number, new Array);
      this.comments[this.number].push({
        author: this.addedName,
        text: this.addedComment,
        time: Date(),
      });
      this.addedName = '';
      this.addedComment = '';
      this.time = moment(this.time).format('MMMM Do YYYY, h:mm:ss a');
    },

    
  }
  
});