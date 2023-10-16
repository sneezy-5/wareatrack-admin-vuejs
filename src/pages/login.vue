<script  lang="ts" setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import login from '@/assets/images/login.jpeg'
import { accountService } from '@/_services';
import router from '@/router';

const screenWidth = ref(window.innerWidth);

// Fonction de mise à jour de la largeur de l'écran
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

// Écouteur d'événement pour le redimensionnement de la fenêtre
window.addEventListener('resize', updateScreenWidth);
updateScreenWidth();

const firstCardCols = computed(() => {
  if (screenWidth.value >= 955) {
    return 6; // 1/3 de la largeur sur les écrans larges
  } else {
    return 12; // Pleine largeur sur les écrans plus petits
  }
});

const secondCardCols = computed(() => {
  if (screenWidth.value >= 955) {
    return 6;
  } else {
    return 0; // 0 colonnes, masquer complètement sur les écrans plus petits
  }
});

const isLoading = ref(false)

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
const form = reactive({
  email: '',
  password: '',
 // remember: false,
  // formErrors: {
  //   email: false,
  //   password: false,
  // },
})
const errors = ref('')


const submit = () => {
console.log(form)
  isLoading.value = true
    accountService.login(form)
      .then((res: { data: { access: string; role: string;database:string  } }) => {
        accountService.saveToken('access', res.data.access);
        accountService.saveToken('role', res.data.role);
        accountService.saveToken('database', res.data.database);

        router.push('/dashboard');
      })
      .catch((error: { status: number }) => {
        errors.value = '';
        if (error.status === 403) {
          console.error("Votre Email/mot de passe est incorrect");
        }
        isLoading.value = false;
        errors.value = "Votre Email/mot de passe est incorrect";
      });
};



</script>

<template>
  <div class="contenair">
    <div class="card">
      <v-col :cols="firstCardCols" md="6" class=".center-col">
        <v-card   elevation="0" class="vcard">
          <Form @submit="submit" :validation-schema="schema" class="form-control">
            <Field name="email"  class="form-input" v-model="form.email"/>
            <ErrorMessage name="email" class="form-error" />
            <Field name="password" type="password" class="form-input" v-model="form.password" />
            <ErrorMessage name="password" class="form-error"  />
            <VBtn

                type="submit"
                :loading="isLoading"
                class="d-flex justify-center align-center"
                color="primary"
              >
              <template #loader>
                  <VProgressCircular indeterminate color="white" />
                </template>
                {{ isLoading ? '' : 'Login' }}
              </VBtn>
          </Form>
        </v-card>



        </v-col>
        <v-col :cols="secondCardCols"  md="6"   >
          <v-img
          :src="login"
          class="ds-none"
          >

          </v-img>
        </v-col>
    </div>
  </div>
</template>

<style scoped lang="scss">

.contenair{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, rgb(233, 235, 205), rgb(166, 166, 220));
}
.card{
  width: 60%;
  height: 30rem;
  background: rgb(188, 207, 113);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px rgba($color: #000000, $alpha: 0.70);
  border-radius: 30px;

}
.form-control{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.form-input{
  color: #000000;
  border: 1px rgb(30, 106, 228) solid;
  border-radius: 10px;
  width: 90%;
  height: 50px;
  &:hover{
    border: 2px rgb(3, 133, 202) solid;
  }&:focus {
  outline: none;
}
}

.form-error{
  color: red;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}
.vcard{
  background: rgb(188, 207, 113);
  height: 34vh ;
}

@media (max-width: 955px) {
  .center-col {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .ds-done{
    display: none;
  }

  .vcard{
  background: rgb(188, 207, 113);
  height: 20vh;

}

.card{
  width: 60%;
  height: 20rem;
  background: rgb(188, 207, 113);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px rgba($color: #000000, $alpha: 0.70);
  border-radius: 30px;

}
}
</style>
