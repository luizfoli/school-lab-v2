import mongoose from 'mongoose';

function Database() {

  this.connect = () => {
    mongoose.connect(
      "mongodb+srv://root:toor@cluster0-oluyl.mongodb.net/appet?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }

  this.desconnect = () => {
      mongoose.disconnect();
  }
}

export default new Database();