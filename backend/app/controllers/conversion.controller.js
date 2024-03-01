exports.convert = async (req, res) => {
   let result = [];
   if (req.query.typeConversion === 'chips') {
    if (req.query.type === 'frag') {
         result = [req.query.type, req.query.quantity, req.query.typeConversion, {"result": await frag(req.query.quantity)}];
    } else if (req.query.type === 'frost') {
         result = [req.query.type, req.query.quantity, req.query.typeConversion, {"result": await frost(req.query.quantity)}];
    } else if (req.query.type === 'broam') {
         result = [req.query.type, req.query.quantity, req.query.typeConversion, {"result": await broam(req.query.quantity)}];
    } else if (req.query.type === 'grandfrag') {
         result = [req.query.type, req.query.quantity, req.query.typeConversion, {"result": await grandFrag(req.query.quantity)}];
    } else if (req.query.type === 'ruck') {
         result = [req.query.type, req.query.quantity, req.query.typeConversion, {"result": await ruck(req.query.quantity)}];
    } else {
        res.send('Invalid type');
    }
}
   
   res.send(result);

}


async function frag(quantity){
    return quantity * 6.5;
}

async function frost(quantity){
    return quantity * 0.5;
}

async function broam(quantity){
    return quantity * 150;
}

async function grandFrag(quantity){
    return quantity * 975;
}

async function ruck(quantity){
    return quantity * 1;
}