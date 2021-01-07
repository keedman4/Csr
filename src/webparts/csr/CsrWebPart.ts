import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { IDateTimeFieldValue, PropertyFieldDateTimePicker, DateConvention, TimeConvention } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';

import * as strings from 'CsrWebPartStrings';
import Csr from './components/Csr';
import { ICsrProps } from './components/ICsrProps';


export interface ICsrWebPartProps {
  description: string;
  investments: number;
  insurance: number;
  health: number;
  newCustomerCount: number;
  selectdate: IDateTimeFieldValue;
 

}

export default class CsrWebPart extends BaseClientSideWebPart<ICsrWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICsrProps> = React.createElement(
      Csr,
      {
        description: this.properties.description,
        investments: this.properties.investments,
        insurance: this.properties.insurance,
        health: this.properties.health,
        newCustomerCount: this.properties.newCustomerCount,
        selectdate: this.properties.selectdate
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),

                PropertyPaneTextField('investments', {
                  label: "InvestmentFieldLabel"
                }),

                PropertyPaneTextField('insurance', {
                  label: "InsuranceFieldLabel"
                }),

                PropertyPaneTextField('health', {
                  label: "HealthFieldLabel"
                }),
                
                PropertyPaneTextField('newCustomerCount', {
                  label: "NewCustomerCountLabel"
                }),

                PropertyFieldDateTimePicker('selectdate', {
                  label: 'Select the date and time',
                  initialDate: this.properties.selectdate,
                  dateConvention: DateConvention.Date,
                  timeConvention: TimeConvention.Hours12,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'dateTimeFieldId',
                  showLabels: false
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
