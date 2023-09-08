import axios from 'axios';
import queryString from 'query-string';
import { TestReportInterface, TestReportGetQueryInterface } from 'interfaces/test-report';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTestReports = async (
  query?: TestReportGetQueryInterface,
): Promise<PaginatedInterface<TestReportInterface>> => {
  const response = await axios.get('/api/test-reports', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTestReport = async (testReport: TestReportInterface) => {
  const response = await axios.post('/api/test-reports', testReport);
  return response.data;
};

export const updateTestReportById = async (id: string, testReport: TestReportInterface) => {
  const response = await axios.put(`/api/test-reports/${id}`, testReport);
  return response.data;
};

export const getTestReportById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/test-reports/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTestReportById = async (id: string) => {
  const response = await axios.delete(`/api/test-reports/${id}`);
  return response.data;
};
