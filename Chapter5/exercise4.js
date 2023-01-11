function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
//It should output Product2, Product3, and Product not found!
//Reason for that is the cases dont have a break statement which means after it goes to the case according to the serial it would start executing from that location
