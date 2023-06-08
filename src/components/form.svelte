<script lang="ts">
    let formData = {
        name: "",
        email: "",
        community: "",
        imgFile: "",
        audFile: "",
        communities: [],
    };
</script>

<form class="form">
    <h1>Upload to a <b>HER</b> Lab Community Quilt</h1>
    <label class="flex-items-a" for="name">Name your creation</label>
    <input class="flex-items-b" id="name" type="text" required>
    <label class="flex-items-a" for="email">Email address</label>
    <input class="flex-items-b" id="email" type="email"  required>
    <label class="flex-items-a" for="community">Select your community</label>
    <select class="flex-items-b" id="community"  required>
        <option>holder</option>
    </select> 
    <label class="flex-items-a" for="imgFile">Snap or upload a picture of your square!</label>
    <input class="flex-items-b" id="imgFile" type="file"  accept=".apng, .avif, .gif, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .png, .svg" required>
    <label class="flex-items-a" for="audFile" >Record or upload a sound!</label>
    <input class="flex-items-b" id="audFile" type="file" accept=".mp3, .flac, .wav" required>
    <label class="flex-items-a" for="mailList">Would you like to be added to a mailing list to stay up to date on future workshops and research?</label>
    <input class="flex-items-b" id="mailList" type="checkbox">
    <input class="flex-items-b" id="submit" type="submit" value="Upload">
</form>

<style>
    form {
        color: #ffffd9;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        padding: 12% 4%;
        text-align: center;
        font-size: 18px;
    }

    input option{
        background-color: transparent;
        color: #ffffd9;
    }

    mat-error {
        color: #f11c03;
        margin: 0px 0px 0px 0px;
}


.flex-items-a {
    margin-top: 4%;
    margin-bottom: 2%;
}

.flex-items-b {
    margin-top: 2%;
    margin-bottom: 2%;
    padding-bottom: 2%;
    padding-top: 2%;
}

input.submit{
    background-color: #ffffd9;
    border-radius: 6px;
    border-color: #33393b;
    font-size: 18px;
    font-weight: bold;
    color: #33393b;
    width: 50%;
    align-self: center;
    border-style: outset;
}

h1 {
    font-size: 32px;
    font-weight: bold;
    background: linear-gradient(to right,#1c03f1, #8fd28d, #ffffd9, #f11c03);
   -webkit-background-clip: text;
    background-clip: text;
    clip: text;
   -webkit-text-fill-color: transparent;
}
</style>