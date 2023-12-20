<template>
  <div id="app">
    <input
      ref="file"
      type="file"
      style="display:none"
      @change="handleInputFile($event)"
    >
    <button @click="$refs.file.click()">
      Dosya Seç
    </button>
    <button @click="downloadFile()">
      Dosya İndir
    </button>

  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      fileBase64: '',
      fileName: '',
      fileType: ''
    }
  },

  methods: {
    async handleInputFile (e) {
      const file = e.target.files[0]
      this.fileName = file.name
      this.fileType = file.type
      this.fileBase64 = await this.createBase64(file)

      console.log('File Name: ', this.fileName)
      console.log('Base64: ', this.fileBase64)
    },

    createBase64 (file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.fileName = file.name

        fileReader.onload = (e) => {
          var data = new Uint8Array(e.target.result)
          var byteString = btoa(
            new Uint8Array(data).reduce(function (data, byte) {
              return data + String.fromCharCode(byte)
            }, '')
          )

          resolve(byteString)
        }

        fileReader.readAsArrayBuffer(file)
      })
    },

    base64ToBlob (base64String) {
      const contentType = ''
      const sliceSize = 512

      var byteCharacters = atob(base64String)
      var byteArrays = []

      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize)

        var byteNumbers = new Array(slice.length)
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i)
        }

        var byteArray = new Uint8Array(byteNumbers)

        byteArrays.push(byteArray)
      }

      var blob = new Blob(byteArrays, { type: contentType })
      return blob
    },

    downloadFile () {
      const urlBlob = URL.createObjectURL(new Blob([this.base64ToBlob(this.fileBase64)]))
      const link = document.createElement('a')
      link.href = urlBlob
      link.setAttribute('download', this.fileName)
      document.body.appendChild(link)
      link.click()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
