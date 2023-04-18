const app = Vue.createApp({
    data(){
        return{
          playerHealth: 100,
          monsterHealth: 100,
          noOfRounds: 0,
          winner:null
        };
    },
    methods:{
        attackMonster(){
         this.noOfRounds++;
            //random dmg between 5 and 15 points
         const attackPower = Math.floor(Math.random() * (15 - 5) + 5);
         this.monsterHealth -= attackPower;
         this.attackPlayer(); 
        },
        attackPlayer(){
         const attackPower = Math.floor(Math.random() * (20 - 10) + 10); 
         this.playerHealth -= attackPower; 
        },
        heavyAttackMonster(){
        this.noOfRounds++;
        const attackPower = Math.floor(Math.random() * (25 - 10) + 10); 
        this.monsterHealth -= attackPower;
        this.attackPlayer();
        },
        heal(){
        this.noOfRounds++;
        const healPlayer = Math.floor(Math.random() * (20 - 8) + 8);
        if(this.playerHealth + healPlayer > 100){
            this.playerHealth = 100;
        }else{
            this.playerHealth += healPlayer;
        }
        this.attackPlayer();
        },
        gameReset(){
          this.playerHealth = 100;
          this.monsterHealth = 100;
          this.winner = null;
          this.noOfRounds = 0;
        },
        surrender(){
            this.winner = 'loose';
        }
    },
    watch:{
        playerHealth(value){
            if(value <=0 && this.monsterHealth <=0){
                //Draw
                this.winner = 'draw';
            }else if (value <= 0){
                //Game Over
                this.winner = 'loose';
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <=0){
                //Draw
                this.winner = 'draw';
            }else if (value <=0){
                //Victory
                this.winner = 'win';
            }
        }
    },
    computed:{
      monsterBarStyle(){
        if(this.monsterHealth < 0){
            return {width: '0%'}
        }
        return {width: this.monsterHealth + '%'};
      },
      playerBarStyle(){
        if(this.playerHealth < 0){
            return {width: '0%'}
        }
        return {width: this.playerHealth + '%'}
      },
      canUseHeavyAttack(){
        return this.noOfRounds % 3 !== 0;
      }
    },
})

app.mount("#game")