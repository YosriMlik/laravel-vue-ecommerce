<template>
    <div class="">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Register</div>
                    <div class="card-body">
                        <form>
                            <div class="form-group row mb-3">
                                <label for="name" class="col-sm-4 col-formlabel text-md-right">Name</label>
                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" v-model="user.name" required autofocus
                                        autocomplete="off">
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="email" class="col-sm-4 col-formlabel text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" v-model="user.email" required
                                        autofocus autocomplete="off">
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="password" class="col-md-4 colform-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-model="user.password"
                                        required autocomplete="off">
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="password" class="col-md-4 colform-label text-md-right">Password
                                    Confirmation</label>
                                <div class="col-md-6">
                                    <input id="password_confirmation" type="password" class="form-control"
                                        v-model="user.password_confirmation" required autocomplete="off">
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary" @click="handleSubmit">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from "axios"
import { useRouter } from 'vue-router';

const router = useRouter()
let user = {}

const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent the default form submission behavior
    try {
        const response = await axios.post('http://localhost:8000/api/register/', user);
        console.log(response);
        alert("Registered Successfully !")
        router.push("/login");  // Uncomment this line if you want to redirect after successful submission
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}

</script>
<style scoped>
.marge {
    position: fixed;
    width: 100%;
    height: 300px;
    margin: 5% auto;
    padding: 20px;
    border: 5px solid #ccc;
    background-color: #fff;
}
</style>
