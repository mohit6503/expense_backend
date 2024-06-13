import Transaction from "../model/transaction.model.js";
export const transaction=async(req,res)=>{
    try {
        const { name, description, date,price } = req.body;
        const transaction = await Transaction.create({ name, description, date,price });
        res.json(transaction);
    } catch (error) { 
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}



export const transactions=async(req,res)=>{

    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}


export const deletetransaction=async(req,res)=>{

    try {
        const { id } = req.params;
        await Transaction.findByIdAndDelete(id);
        res.status(200).json({ message: 'Transaction deleted successfully' });
      } catch (error) {
        res.status(500).send(error);
      }
}  