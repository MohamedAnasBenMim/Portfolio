import Location from "./Location";
import Link from "./Link";
import Activity from "./Activity";

export default class Education {

  private _school: string;
  private _degree: string;
  private _fieldOfStudy: string;
  private _isCurrent: boolean;
  private _startDate: Date;
  private _endDate: Date;
  private _location: string;
  private _activities: string[];
  private _links: string[];

  constructor(school: string, degree: string, fieldOfStudy: string, isCurrent: boolean, startDate: Date, endDate: Date, location: string, activities: string[], links: string[]) {
    this._school = school;
    this._degree = degree;
    this._fieldOfStudy = fieldOfStudy;
    this._isCurrent = isCurrent;
    this._startDate = new Date(startDate);
    this._endDate = new Date(endDate);
    this._location = location;
    this._activities = activities;
    this._links = links;
  }


  get school(): string {
    return this._school;
  }

  set school(value: string) {
    this._school = value;
  }

  get degree(): string {
    return this._degree;
  }

  set degree(value: string) {
    this._degree = value;
  }

  get fieldOfStudy(): string {
    return this._fieldOfStudy;
  }

  set fieldOfStudy(value: string) {
    this._fieldOfStudy = value;
  }

  get isCurrent(): boolean {
    return this._isCurrent;
  }

  set isCurrent(value: boolean) {
    this._isCurrent = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get activities(): string[] {
    return this._activities;
  }

  set activities(value: string[]) {
    this._activities = value;
  }

  get links(): string[] {
    return this._links;
  }

  set links(value: string[]) {
    this._links = value;
  }
}
