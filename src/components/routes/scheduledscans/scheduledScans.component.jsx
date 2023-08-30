import * as React from 'react';
import HeaderComponent from "../../header/header.component";
import Card from "../../card/card.component";
import ConectionYellowSvg from '../../../assets/images/conectionYellow.svg'
import ConectionRedSvg from '../../../assets/images/conectionRed.svg'
import Ticket from '../../../assets/images/ticket.svg';
import TablePartnerAccounts from "./TablePartnerAccounts/TablePartnerAccounts";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ProblemDevices from "./modal/problemDevices.component";
import "./partnerAccount.styles.scss";
import { Grid } from '@mui/material';

const style = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '80vh',
  bgcolor: 'background.paper',
  border: '1px solid #E1E4E7',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
};

const cards = [
  {
    title: "Scans performed (last 24h)",
    priority: false,
    quantity: 8,
    icon: Ticket,
    total: 320,
    status: null,
    link: "/",
  },
  {
    title: "Scans performed (last 30 days)",
    priority: false,
    quantity: 120,
    icon: null,
    total: 320,
    status: "GREEN",
    link: "/",
  },
  {
    title: "Scans scheduled for next 24h",
    priority: false,
    quantity: 8,
    icon: ConectionYellowSvg,
    total: 256,
    status: null,
    link: "/",
  },
  {
    title: "Scans scheduled for next 24h",
    priority: false,
    quantity: 4,
    icon: ConectionRedSvg,
    total: 256,
    status: null,
    link: "/",
  },
  
];
const ScheduledScansIndex =  () => {
  const [modal, setModal] = React.useState(false);
  const setModalOpen = () => {setModal(true)};
  const setModalClose = () => {setModal(false)};

  return (
  
  <>

    {/* Cards secction */}
    <HeaderComponent links={{"":"Pinky.ai", "./Schedule-Scan-Assets":"Scheduled Scans"}}>Scheduled Scans</HeaderComponent>
    <section className="section-style">
      <Grid container spacing={1} className="card-container">
        {cards.map((card, index) => (
          <Grid item xs={12} md={6} lg={3}>
            <Card
              title={card.title}
              priority={card.priority}
              quantity={card.quantity}
              icon={card.icon}
              total={card.total}
              status={card.status}
              link={card.link}
            />
          </Grid>
        ))}
      </Grid>
    </section>
        
    {/* Table Partner accounts management seccion */}
    <section>
      <TablePartnerAccounts/>
    </section>
    <Button type={"btn-danger"} size={"btn-large"} position={"right"} onClick={setModalOpen}>Problem devices</Button>
    <Modal
        open={modal}
        onClose={setModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ProblemDevices setModal={setModalClose}/>
        </Box>
      </Modal>
  </>
  )

}

export default ScheduledScansIndex;