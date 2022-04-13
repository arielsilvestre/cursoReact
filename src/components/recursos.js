const productos = [
  {
    "id": 1,
    "marca": "Alnylam Pharmaceuticals, Inc.",
    "modelo": "Poaceae",
    "precio": "$193180.86",
    "color": "Teal",
    "descripcion": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "imagen": "http://dummyimage.com/139x100.png/dddddd/000000"
  },
  {
    "id": 2,
    "marca": "Phillips 66 Partners LP",
    "modelo": "Brassicaceae",
    "precio": "$160362.77",
    "color": "Crimson",
    "descripcion": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    "imagen": "http://dummyimage.com/189x100.png/ff4444/ffffff"
  },
  {
    "id": 3,
    "marca": "Brown Forman Corporation",
    "modelo": "Araceae",
    "precio": "$149857.76",
    "color": "Red",
    "descripcion": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "imagen": "http://dummyimage.com/191x100.png/dddddd/000000"
  },
  {
    "id": 4,
    "marca": "Evogene Ltd.",
    "modelo": "Acarosporaceae",
    "precio": "$182785.44",
    "color": "Red",
    "descripcion": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "imagen": "http://dummyimage.com/169x100.png/ff4444/ffffff"
  },
  {
    "id": 5,
    "marca": "First Trust Low Duration Opportunities ETF",
    "modelo": "Cyperaceae",
    "precio": "$128967.19",
    "color": "Blue",
    "descripcion": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "imagen": "http://dummyimage.com/103x100.png/dddddd/000000"
  },
  {
    "id": 6,
    "marca": "Daily Journal Corp. (S.C.)",
    "modelo": "Hydrophyllaceae",
    "precio": "$65871.12",
    "color": "Purple",
    "descripcion": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "imagen": "http://dummyimage.com/220x100.png/5fa2dd/ffffff"
  },
  {
    "id": 7,
    "marca": "Cars.com Inc.",
    "modelo": "Cactaceae",
    "precio": "$20437.30",
    "color": "Teal",
    "descripcion": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "imagen": "http://dummyimage.com/184x100.png/dddddd/000000"
  },
  {
    "id": 8,
    "marca": "EVINE Live Inc.",
    "modelo": "Frankeniaceae",
    "precio": "$134308.52",
    "color": "Pink",
    "descripcion": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "imagen": "http://dummyimage.com/167x100.png/dddddd/000000"
  },
  {
    "id": 9,
    "marca": "Highland Funds I",
    "modelo": "Liliaceae",
    "precio": "$18744.01",
    "color": "Teal",
    "descripcion": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "imagen": "http://dummyimage.com/106x100.png/ff4444/ffffff"
  },
  {
    "id": 10,
    "marca": "Pearson, Plc",
    "modelo": "Araliaceae",
    "precio": "$49487.28",
    "color": "Indigo",
    "descripcion": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "imagen": "http://dummyimage.com/169x100.png/cc0000/ffffff"
  },
  {
    "id": 11,
    "marca": "BlackRock Municipal Income Trust",
    "modelo": "Scrophulariaceae",
    "precio": "$164009.49",
    "color": "Indigo",
    "descripcion": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    "imagen": "http://dummyimage.com/220x100.png/dddddd/000000"
  },
  {
    "id": 12,
    "marca": "NetScout Systems, Inc.",
    "modelo": "Opegraphaceae",
    "precio": "$112058.81",
    "color": "Fuscia",
    "descripcion": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "imagen": "http://dummyimage.com/101x100.png/ff4444/ffffff"
  },
  {
    "id": 13,
    "marca": "Shinhan Financial Group Co Ltd",
    "modelo": "Asteraceae",
    "precio": "$93694.17",
    "color": "Goldenrod",
    "descripcion": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "imagen": "http://dummyimage.com/112x100.png/dddddd/000000"
  },
  {
    "id": 14,
    "marca": "Jones Energy, Inc.",
    "modelo": "Apiaceae",
    "precio": "$119247.00",
    "color": "Pink",
    "descripcion": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "imagen": "http://dummyimage.com/150x100.png/cc0000/ffffff"
  },
  {
    "id": 15,
    "marca": "Sociedad Quimica y Minera S.A.",
    "modelo": "Valerianaceae",
    "precio": "$91207.49",
    "color": "Green",
    "descripcion": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "imagen": "http://dummyimage.com/218x100.png/cc0000/ffffff"
  },
  {
    "id": 16,
    "marca": "Gener8 Maritime, Inc.",
    "modelo": "Caryophyllaceae",
    "precio": "$113375.70",
    "color": "Goldenrod",
    "descripcion": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "imagen": "http://dummyimage.com/118x100.png/5fa2dd/ffffff"
  },
  {
    "id": 17,
    "marca": "Vanguard Russell 3000 ETF",
    "modelo": "Cupressaceae",
    "precio": "$20337.28",
    "color": "Pink",
    "descripcion": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "imagen": "http://dummyimage.com/227x100.png/dddddd/000000"
  },
  {
    "id": 18,
    "marca": "WSFS Financial Corporation",
    "modelo": "Poaceae",
    "precio": "$195433.17",
    "color": "Purple",
    "descripcion": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "imagen": "http://dummyimage.com/171x100.png/ff4444/ffffff"
  },
  {
    "id": 19,
    "marca": "USG Corporation",
    "modelo": "Fabaceae",
    "precio": "$74145.85",
    "color": "Khaki",
    "descripcion": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "imagen": "http://dummyimage.com/186x100.png/ff4444/ffffff"
  },
  {
    "id": 20,
    "marca": "Royal Bancshares of Pennsylvania, Inc.",
    "modelo": "Crassulaceae",
    "precio": "$57141.43",
    "color": "Mauv",
    "descripcion": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "imagen": "http://dummyimage.com/118x100.png/cc0000/ffffff"
  }
]


export const getProductos = () => {
return new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 500);
});
};

export const getProductosById= (id) => {
  return new Promise((resolve) => {
      setTimeout(()=> {
          resolve(productos.find(prod => prod.id == id));
      },500);
  })
}