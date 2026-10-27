const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Experiment 13: CI/CD Pipeline Deployed Successfully!');
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = app;
