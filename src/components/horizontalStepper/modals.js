import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StepOne from "./phoneNumberForm";
import StepTwo from "./otpForm";
import StepThree from "./passkey&amount"; // Import StepThree
import Final from "./qrCodePage";
import StepFive from "./generateQrForm"; // Import StepFive
import StepFour from "./accountCreated";

function ModalS() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    countryCode: "",
    phoneNumber: "",
    otp: "",
    passkey: "",
    amount: "",
    language: "",
    account: "",
    cryptocurrency: "",
  });
  
  const [qrCodeUrl, setUrl]=useState("https://img.freepik.com/premium-vector/vector-qr-code-sample-smartphone-scanning-isolated-white-background_255502-625.jpg")

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleInputData = (input, valueOrEvent) => {
    const value =
      valueOrEvent && valueOrEvent.target
        ? valueOrEvent.target.value
        : valueOrEvent;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepThree
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
  case 4:
    return (
    <div className="App">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="custom-margin">
            <StepFour nextStep={nextStep} values={formData}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
  case 5:
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="custom-margin">
            <StepFive
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
              nextStep={nextStep}
              setQrCodeUrl={setUrl}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
    default:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Final values={formData} qrCodeUrl={qrCodeUrl}/>
              </Col>
            </Row>
          </Container>
        </div>
      );
  }
}

export default ModalS;
