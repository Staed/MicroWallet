import { Accordion, Card, Button } from 'react-bootstrap';

function Wallet() {
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Bitcoin
                </Accordion.Header>
                <Accordion.Body>
                    Last 7 Days: In/Out
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Etherum
                </Accordion.Header>
                <Accordion.Body>
                    Last 7 Days: In/Out
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Wallet;
