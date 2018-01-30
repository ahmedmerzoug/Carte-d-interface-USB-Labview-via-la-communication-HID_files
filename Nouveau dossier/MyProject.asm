
_Interrupt:

;MyProject.mpas,5 :: 		begin
;MyProject.mpas,6 :: 		USB_Interrupt_Proc();
	CALL        _USB_Interrupt_Proc+0, 0
;MyProject.mpas,7 :: 		end;
L_end_Interrupt:
L__Interrupt15:
	RETFIE      1
; end of _Interrupt

_main:

;MyProject.mpas,8 :: 		begin
;MyProject.mpas,9 :: 		trisd:=0x00;
	CLRF        TRISD+0 
;MyProject.mpas,10 :: 		portd:=0;
	CLRF        PORTD+0 
;MyProject.mpas,11 :: 		trisa:=0xff;
	MOVLW       255
	MOVWF       TRISA+0 
;MyProject.mpas,12 :: 		trisc:=0x00;
	CLRF        TRISC+0 
;MyProject.mpas,13 :: 		portc:=0;
	CLRF        PORTC+0 
;MyProject.mpas,14 :: 		trisb:=0xff;
	MOVLW       255
	MOVWF       TRISB+0 
;MyProject.mpas,15 :: 		portb:=0;
	CLRF        PORTB+0 
;MyProject.mpas,16 :: 		CMCON:=7;
	MOVLW       7
	MOVWF       CMCON+0 
;MyProject.mpas,17 :: 		delay_ms(100) ;
	MOVLW       2
	MOVWF       R11, 0
	MOVLW       4
	MOVWF       R12, 0
	MOVLW       186
	MOVWF       R13, 0
L__main2:
	DECFSZ      R13, 1, 1
	BRA         L__main2
	DECFSZ      R12, 1, 1
	BRA         L__main2
	DECFSZ      R11, 1, 1
	BRA         L__main2
	NOP
;MyProject.mpas,18 :: 		HID_Enable(@readbuff,@writebuff);
	MOVLW       _readbuff+0
	MOVWF       FARG_HID_Enable_readbuff+0 
	MOVLW       hi_addr(_readbuff+0)
	MOVWF       FARG_HID_Enable_readbuff+1 
	MOVLW       _writebuff+0
	MOVWF       FARG_HID_Enable_writebuff+0 
	MOVLW       hi_addr(_writebuff+0)
	MOVWF       FARG_HID_Enable_writebuff+1 
	CALL        _HID_Enable+0, 0
;MyProject.mpas,19 :: 		while TRUE do
L__main4:
;MyProject.mpas,21 :: 		HID_Read();
	CALL        _HID_Read+0, 0
;MyProject.mpas,22 :: 		portd:=readbuff[0];
	MOVF        1280, 0 
	MOVWF       PORTD+0 
;MyProject.mpas,23 :: 		writebuff[0]:=adc_read(0)shr 2;
	CLRF        FARG_ADC_Read_channel+0 
	CALL        _ADC_Read+0, 0
	MOVF        R0, 0 
	MOVWF       R2 
	MOVF        R1, 0 
	MOVWF       R3 
	RRCF        R3, 1 
	RRCF        R2, 1 
	BCF         R3, 7 
	RRCF        R3, 1 
	RRCF        R2, 1 
	BCF         R3, 7 
	MOVF        R2, 0 
	MOVWF       1344 
;MyProject.mpas,24 :: 		delay_ms(30);
	MOVLW       78
	MOVWF       R12, 0
	MOVLW       235
	MOVWF       R13, 0
L__main8:
	DECFSZ      R13, 1, 1
	BRA         L__main8
	DECFSZ      R12, 1, 1
	BRA         L__main8
;MyProject.mpas,25 :: 		while ( HID_Write(@writebuff,2)= 0) do;
L__main10:
	MOVLW       _writebuff+0
	MOVWF       FARG_HID_Write_writebuff+0 
	MOVLW       hi_addr(_writebuff+0)
	MOVWF       FARG_HID_Write_writebuff+1 
	MOVLW       2
	MOVWF       FARG_HID_Write_len+0 
	CALL        _HID_Write+0, 0
	MOVF        R0, 0 
	XORLW       0
	BTFSC       STATUS+0, 2 
	GOTO        L__main10
;MyProject.mpas,26 :: 		end;
	GOTO        L__main4
;MyProject.mpas,27 :: 		end.
L_end_main:
	GOTO        $+0
; end of _main
