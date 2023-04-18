const app = Vue.createApp({
    data(){
        return{
          playerHealth: 100,
          monsterHealth: 100
        };
    },
    methods:{
        attackMonster(){
            //random dmg between 5 and 15 points
         const attackPower = Math.floor(Math.random() * (15 - 5) + 5);
         this.monsterHealth -= attackPower;
         this.attackPlayer(); 
        },
        attackPlayer(){
         const attackPower = Math.floor(Math.random() * (19 - 8) + 8); 
         this.playerHealth -= attackPower; 
        }
    },
    computed:{
      monsterBarStyle(){
        return {width: this.monsterHealth + '%'};
      },
      playerBarStyle(){
        return {width: this.playerHealth + '%'}
      }
    },
})

app.mount("#game")