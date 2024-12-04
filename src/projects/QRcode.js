import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRcode = () => {

  const [input, setInput] = useState("")
  const [qrCode, setQrCode] = useState("")

  const handleQRCode = () => {
    setQrCode(input)
    setInput("")
  }

  return (
    <div>
      <h2>QR code Generator</h2>
      <div>
        <input type="text" placeholder='Enter input to Generate QR '
          onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => handleQRCode()}>Generate QR code</button>
      </div>
      <div>

        <QRCode id='qr-code-generator' value={qrCode} className='bg-white' />
      </div>
    </div>
  )
}

export default QRcode
