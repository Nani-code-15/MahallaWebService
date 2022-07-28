package com.itz.mahalla.use_cases.super_admin_module.table_main_schema;

import com.itz.mahalla.helpers.configs.LoggerConfig;
import com.itz.mahalla.persistence.models.super_admin_module.TableMainSchema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TableMainSchemaService {
	@Autowired
	TableMainSchemaRepository tableMainSchemaRepository;

	public Boolean checkTableMainSchemaPk1(Integer pk0) throws Exception {
		try {
			TableMainSchema getVal = tableMainSchemaRepository.findById(pk0);
			if (getVal == null)
				return false;
		} catch (Exception e) {
			LoggerConfig.logger.error(e.getMessage());
			throw new Exception(e.getMessage());
		}
		return true;
	}

	public TableMainSchema getTableMainSchemaPk1(Integer pk0) throws Exception {
		TableMainSchema getVal;
		try {
			getVal = tableMainSchemaRepository.findById(pk0);
		} catch (Exception e) {
			LoggerConfig.logger.error(e.getMessage());
			throw new Exception(e.getMessage());
		}
		return getVal;
	}

	public List<TableMainSchema> getTableMainSchemaPk2(Integer pk0) throws Exception {
		try {
			return tableMainSchemaRepository.findByPageMasterId(pk0);
		} catch (Exception e) {
			LoggerConfig.logger.error(e.getMessage());
			throw new Exception(e.getMessage());
		}
	}

	public void setTableMainSchemaDetails(TableMainSchema val) throws Exception {
		try {
			tableMainSchemaRepository.save(val);
		} catch (Exception e) {
			LoggerConfig.logger.error(e.getMessage());
			throw new Exception(e.getMessage());
		}
	}

	public void delAllData(List<TableMainSchema> val) throws Exception {
		try {
			tableMainSchemaRepository.deleteAll(val);
		} catch (Exception e) {
			LoggerConfig.logger.error(e.getMessage());
			throw new Exception(e.getMessage());
		}
	}

	public void delData(TableMainSchema val) throws Exception {
		try {
			tableMainSchemaRepository.delete(val);
		} catch (Exception e) {
			LoggerConfig.logger.error(e.getMessage());
			throw new Exception(e.getMessage());
		}
	}

	public List<TableMainSchema> getAllData() throws Exception {
		try {
			return tableMainSchemaRepository.findAll();
		} catch (Exception e) {
			LoggerConfig.logger.error(e.getMessage());
			throw new Exception(e.getMessage());
		}
	}

	public Page<TableMainSchema> getAllDataByPg(int pn, int ps) throws Exception {
		Pageable pg = PageRequest.of(pn, ps);
		try {
			return tableMainSchemaRepository.findAll(pg);
		} catch (Exception e) {
			LoggerConfig.logger.error(e.getMessage());
			throw new Exception(e.getMessage());
		}
	}
}
