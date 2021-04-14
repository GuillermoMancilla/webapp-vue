<template>
  <div id="chbd">
    <div
     class="view login"
     v-if="state.username === '' || state.username === null">
    
     <form class="login-form" @submit.prevent="Login">
       <div class="form-inner">
         <h1 class="text-center logg">Login To ChatRoom</h1>
         <label for="username">Nombre de usuario </label>
         <input
           type="text"
           v-model="inputUsername"
           placeholder="Ingrese su nombre..."
         />
         <input type="submit" value="Login" />
       </div>
     </form>
    </div>
    <div class="view chat" v-else>
     <header>
       <button class="logout focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg" @click="Logout">Logout</button>
       <h1>
         <!-- <img src="@/assets/logo.png" height="30" width="30" /> -->Bienvenido, 
         {{ state.username }}!
       </h1>
     </header>

     <section class="chat-box">
       <div
         v-for="message in state.messages"
         :key="message.key"
         :class="
           message.username == state.username
             ? 'message current-user'
             : 'message'
         "
       >
         <div class="message-inner">
           <div class="username">{{ message.username }}</div>
           <div class="content">{{ message.content }}</div>
         </div>
       </div>
     </section>

     <footer>
       <form @submit.prevent="SendMessage">
         <input
           type="text"
           v-model="inputMessage"
           placeholder="Escriba su mensaje..."
         />
         <input type="submit" value="Enviar" />
       </form>
     </footer>
    </div>
  </div>
</template>

<script>
import db from '../db';

export default {
  name:'Login',
  data (){
      return{
    inputUsername: '',
     inputMessage: '',
      state :  {
      username: "",
      messages: []
    },
      }
  },
  methods: {
      
     Login(){
      if (this.inputUsername != "" || this.inputUsername != null) {
        this.state.username = this.inputUsername;
        this.inputUsername = "";
      }
    },
     Logout(){
      this.state.username = "";
    },
     SendMessage(){
      var messagesRef = db.database().ref("messages");
      if (this.inputMessage === "" || this.inputMessage === null) {
        return;
      }
      const message = {
        username: this.state.username,
        content: this.inputMessage
      }
      messagesRef.push(message)
      this.inputMessage = "";
    }
  },
  mounted() {
      const messagesRef = db.database().ref("messages");
      messagesRef.on('value', snapshot => {
        const data = snapshot.val();
        let messages = [];
      
        Object.keys(data).forEach(key => {
          messages.push({
            id: key,
            username: data[key].username,
            content: data[key].content
          });
           
        })
        this.state.messages = messages;
        })
  
  
  },
}
</script>
<style lang="scss" scoped>
  * {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.view {
  margin-top: -50px;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 80%;
  background-color: #f8f7ace1;
  border-radius: 24px 24px 0px 0px;
  &.login {
    align-items: center;
    .login-form {
      display: block;
      width: 100%;
      padding: 15px;
      .form-inner {
        display: block;
        background-color: #fff;
        padding: 50px 15px;
        border-radius: 16px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
        h1 {
          color: rgb(26, 24, 24);
          font-size: 28px;
          margin-bottom: 30px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          color: #aaa;
          font-size: 16px;
          transition: 0.4s;
        }
        input[type="text"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px;
          margin-bottom: 15px;
          color: #333;
          font-size: 18px;
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: #f3f3f3;
          transition: 0.4s;
          &::placeholder {
            color: #888;
            transition: 0.4s;
          }
        }
        input[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          width: 100%;
          padding: 10px 15px;
          background-color: goldenrod;
          border-radius: 8px;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }
        &:focus-within {
          label {
            color: goldenrod;
          }
          input[type="text"] {
            background-color: #fff;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
            &::placeholder {
              color: #666;
            }
          }
        }
      }
    }
  }
  &.chat {
    flex-direction: column;
    header {
      position: relative;
      display: block;
      width: 100%;
      padding: 50px 30px 10px;
      .logout {
        position: absolute;
        top: 15px;
        right: 15px;
        appearance: none;
        border: none;
        outline: none;
        background: none;
        color: #fff;
        font-size: 18px;
        margin-bottom: 10px;
        text-align: right;
      }
      h1 {
        color: rgb(8, 8, 8);
      }
    }
    .chat-box {
      border-radius: 24px 24px 0px 0px;
      background-color: #fff;
      box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
      flex: 1 1 100%;
      padding: 30px;
      .message {
        display: flex;
        margin-bottom: 15px;
        .message-inner {
          .username {
            color: #888;
            font-size: 16px;
            margin-bottom: 5px;
            padding-left: 15px;
            padding-right: 15px;
          }
          .content {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f3f3f3;
            border-radius: 999px;
            color: #333;
            font-size: 18px;
            line-height: 1.2em;
            text-align: left;
          }
        }
        &.current-user {
          margin-top: 30px;
          justify-content: flex-end;
          text-align: right;
          .message-inner {
            max-width: 75%;
            .content {
              color: #fff;
              font-weight: 600;
              background-color: goldenrod;
            }
          }
        }
      }
    }
    footer {
      position: sticky;
      bottom: 0px;
      background-color: #fff;
      padding: 30px;
      box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
      form {
        display: flex;
        input[type="text"] {
          flex: 1 1 100%;
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px 0px 0px 8px;
          color: #333;
          font-size: 18px;
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: #f3f3f3;
          transition: 0.4s;
          &::placeholder {
            color: #888;
            transition: 0.4s;
          }
        }
        input[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          padding: 10px 15px;
          border-radius: 0px 8px 8px 0px;
          background-color: goldenrod;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>