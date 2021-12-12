import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arvato',
  templateUrl: './arvato.component.html',
  styleUrls: ['./arvato.component.css']
})
export class ArvatoComponent implements OnInit {

  public gistId1 = "78476e2a5881eb85b775e1f68eba7555";
  public gistFileName1 = "jax2pluginError.txt"
  
  public gistId2= "553a39bf47a822c41818735fa68233a7";
  public gistFileName2 = "bindings.xml"

  public gistId3 = "63fd7ebc2823123d3ebf0c9032b5e241";
  public gistFileName3 = "InitialSoapConfig1.java"

  public gistId4 = "1eb4b062dac14814d45ac4e158df176f";
  public gistFileName4 = "DebugSOAPrequest.java";

  public gistId5 = "f1f04dca1f6da0ec8ed275710b7f911f";
  public gistFileName5 = "ExistingObjectFactory.java";

  public gistId6 = "c402b02a4b6bde70a02e4c7ef6de5836";
  public gistFileName6 = "AmendedObjecFactory.java";

  public gistId7 = "3d8fbd908f677fe60123f925364eca66";
  public gistFileName7 = "FinalSoapConfig.java";

  constructor() { }

  ngOnInit(): void {
  }

}
