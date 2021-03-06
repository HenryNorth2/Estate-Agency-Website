import { Component, OnInit } from '@angular/core';
import { Property } from '../../../models/Property';
import { PropertyService } from '../../../services/property.service';

@Component({
  selector: 'app-new-on-market',
  templateUrl: './new-on-market.component.html',
  styleUrls: ['./new-on-market.component.css']
})
export class NewOnMarketComponent implements OnInit {
  newProperties: Property[];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(properties => {
      const allProperties = properties;

      const sortedProperties = allProperties.slice().sort((a, b) => Number(b.listingId) - Number(a.listingId));
      this.newProperties = sortedProperties.slice(0, 3);
    });
  }

}
