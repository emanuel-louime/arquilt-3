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
    <label class="flex-items-a" for="imgFile" accept="">Snap or upload a picture of your square!</label>
    <input class="flex-items-b" id="imgFile" type="file"  accept=".apng, .avif, .gif, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .png, .svg" [formControl]="imgFile" required>
    <label class="flex-items-a" for="audFile" >Record or upload a sound!</label>
    <input class="flex-items-b" id="audFile" type="file" accept=".mp3, .flac, .wav" required>
    <label class="flex-items-a" for="mailList">Would you like to be added to a mailing list to stay up to date on future workshops and research?</label>
    <input class="flex-items-b" id="mailList" type="checkbox" [formControl]="mailList">
    <input class="flex-items-b" id="submit" type="submit" value="Upload">
</form>